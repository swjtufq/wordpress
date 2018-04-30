<?php

function post_is_in_descendant_category( $cats, $_post = null )
{

  foreach ( (array) $cats as $cat ) {

    // get_term_children() accepts integer ID only

    $descendants = get_term_children( (int) $cat, 'category');

    if ( $descendants && in_category( $descendants, $_post ) )

      return true;

  }

  return false;

}

function lingfeng_pagenavi( $postsize = 0 ) {
    global $paged,$wp_query;
    $max_page = 0;
//    if ( !$max_page ) {
    if(!is_category()){
        $postsize = $postsize - 12;
    }
        if(($postsize-10 >0)) {
            if($postsize%10 == 0){
                $max_page = $postsize / 10;
            }else if($postsize%10 > 0){
                $max_page = $postsize / 10 + 1;
            }

        }
//    }
    if( $max_page >1 ) {
        echo "<div id='page'>";
        if( !$paged ){
            $paged = 1;
        }
//        if( $paged != 1 ) {
            echo "<a href='".get_pagenum_link(1) ."' class='prev' title='First'><<</a>";
//        }
//        previous_posts_link('prev');
//        if ( $max_page >$range ) {
//            if( $paged <$range ) {
//                for( $i = 1; $i <= ($range +1); $i++ ) {
//                    echo "<a href='".get_pagenum_link($i) ."'";
//                    if($i==$paged) echo " class='num current'";
//                    else echo " class='num'";
//                    echo ">$i</a>";
//                }
//            }elseif($paged >= ($max_page -ceil(($range/2)))){
//                for($i = $max_page -$range;$i <= $max_page;$i++){
//                    echo "<a href='".get_pagenum_link($i) ."'";
//                    if($i==$paged)echo " class='num current'";
//                    else echo " class='num'";
//                    echo ">$i</a>";
//                }
//            }elseif($paged >= $range &&$paged <($max_page -ceil(($range/2)))){
//                for($i = ($paged -ceil($range/2));$i <= ($paged +ceil(($range/2)));$i++){
//                    echo "<a href='".get_pagenum_link($i) ."'";
//                    if($i==$paged) echo " class='num current'";
//                    else echo " class='num'";
//                    echo ">$i</a>";
//                }
//            }
//        }else{
            for($i = 1;$i <= $max_page;$i++){
                echo "<a href='".get_pagenum_link($i) ."'";
                if($i==$paged)echo " class='num current'";
                else echo " class='num'";
                echo ">$i</a>";
            }
//        }
//       next_posts_link('Next');
//        if($paged != $max_page){
            echo "<a href='".get_pagenum_link($max_page) ."' class='prev' title='Last'>>></a>";
//        }
        //echo '<span>��['.$max_page.']ҳ</span>';
        echo "</div>\n";
    }





}


function custom_pre_get_posts( $query ) {
    if( $query->is_main_query() && !$query->is_feed() && !is_admin() && is_category()) {
//        $query->set( 'paged', get_query_var('paged')/*str_replace( '/', '', get_query_var( 'page' ) ) */);
        $query->set('page_val', get_query_var('paged'));
        $query->set('paged', 0);
    }  }

add_action('pre_get_posts','custom_pre_get_posts');

function custom_request($query_string ) {
    if( isset( $query_string['page'] ) ) {
        if( ''!=$query_string['page'] ) {
            if( isset( $query_string['name'] ) ) { unset( $query_string['name'] ); } } } return $query_string; }

add_filter('request', 'custom_request');



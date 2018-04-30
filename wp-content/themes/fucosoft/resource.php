<?php  /*Template Name:Resource*/ ?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Fucosoft Resource Center</title>

    <meta content="Fucosoft Resource Center provides useful tips and guides on data recovery, video conversion, video editing, etc." name="Description">

    <meta content="Fucosoft resource, Fucosoft resource center, Fucosoft solutions" name="Keywords">



<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="<?php bloginfo('template_directory')?>/css/bootstrap.min.css" rel="stylesheet">

<script type="text/javascript" src="<?php bloginfo('template_directory')?>/js/jquery-1.9.1.js"></script>

<script type="text/javascript" src="<?php bloginfo('template_directory')?>/js/bootstrap.js"></script>



<link href="<?php bloginfo('template_directory')?>/css/global.css" rel="stylesheet">

<link href="<?php bloginfo('template_directory')?>/css/index.css" rel="stylesheet">

<link href="<?php bloginfo('template_directory')?>/css/fengye.css" rel="stylesheet">



<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>

 <link rel="shortcut icon" href="<?php bloginfo('template_directory')?>/images/favicon.ico" type="image/x-icon">  

   </head>

<body>



<?php get_header(); ?>

<div class="jianjie" style="background-image:url('<?php bloginfo('template_directory')?>/images/03.jpg');width:100%;min-height:200px;margin-top:2px;">

       <div class="container padding-left-right50">

         <h1 class="text-center">Fucosoft Resource Center</h1>

          <p   class="text-center">Welcome to Fucosoft Resource Center. Find Great Solutions to Fix Your Problems!</p>

       </div>     

       

</div>











<!--  -->

 <div class="container" id="news">

       <h2>All Tips

	  </h2>

       <div class="row">

             <div class="col-md-2 n_left">

               <ul>

             <!-- -->

             <?php wp_list_categories('exclude=3,11&&title_li='); ?>

              

             </ul>

                

             </div>

             <div class="visible-xs">&nbsp;&nbsp;</div>

             <div class="col-md-10 n_right"  style="margin-top:-20px;">







  <?php
//  $cats = get_the_category();
//     $cats = $cats = get_categories();

//    foreach ( $cats as $cat ){
//    query_posts( 'showposts=10&cat=' . $cat->cat_ID );	if($cat->cat_ID == 3 || $cat->cat_ID == 11) continue;
  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $args = array(
      'posts_per_page' => 10,
      'paged' => $paged,
      'post_status' => 'publish',
      'category__not_in' => array(3,11)
  );

  query_posts($args);
        ?>



                    <?php while ( have_posts() ) {
                        the_post(); ?>

                           <div class="item">

                              <div class="text">

                                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

                                <p class="dd"><?php the_excerpt(); ?> <a href="<?php the_permalink(); ?>" class="more">Read More >></a></p>

                                <div class="time"><img src="<?php bloginfo('template_directory')?>/images/55.png" /> Posted by <a href="https://plus.google.com/+Fucosoft"><?php the_author(); ?></a> | <?php the_date(); ?></div>

                              </div>

                              <div class="clear"></div>

                            </div><!--item end -->

            

                  

                    <?php } wp_reset_query(); ?>

               



    <?php //} ?>



                 <?php
                 $allsize = wp_count_posts();
                 lingfeng_pagenavi($allsize->publish);?>
             </div><!--right end -->

             

             

       </div><!--row  end -->

       

</div>     











 

<?php get_footer(); ?>



</body>

</html>




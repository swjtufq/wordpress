<?php /*Template Name:Article*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?php the_title(); ?></title>   
    <meta content="<?php strip_tags(the_excerpt());?>" name="Description">             
    
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

<div  id="lujing">
    <div class="container tree"><a href="/" style="color:#ffffff;">Home</a> > <a href="/resource.html" style="color:#ffffff;">Resource</a> > <span style="color:#000"><?php the_title(); ?></span></div>
</div>
<div class="article">


<div class="container" id="article">

    <div class="row">
    
	
		
	
    
	
	<div class="col-md-9 article_left" style="min-height:700px;">
		 
           <div class="panel-body">
				 <div class="actions">
	    	
					<?php while ( have_posts() ) : the_post(); ?>
                     <h1 style="font-size:25px"><?php the_title(); ?></h1>
                     <div class="author"></a>Posted on <?php the_date(); ?> - By <a href="https://plus.google.com/+Fucosoft"><?php the_author(); ?></a> | Follow <a href="https://www.facebook.com/fucosoft/">Facebook</a>, <a href="https://twitter.com/fucosoft">Twitter</a>, <a href="https://www.linkedin.com/company/fucosoft/">Linkedin</a> to Get More Information.</div>


                     <div class="article_content" style="line-height:25px">
                     	<?php the_content(); ?>
                     </div>
                     
                    <?php endwhile; // End of the loop. ?>
              
	        
           
           
                   </div>   			


<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://fucosoft.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>				
				
				
			</div>
	</div>
	<!-- right end -->
      <div class="col-md-3  article_right pm " style="margin-top:37px;" >
		<div class="nn ">
            
              <h3>Recommend Product</h3>
            
             <ul  class="lanmu">
                           <li><a href="/iphone-data-recovery.html">iPhone Data Recovery</a></li>
                           <li ><a href="/guide/iphone-data-recovery.html">User Guide</a></li>
                           <li ><a href="/reviews/iphone-recovery-software.html">Reviews</a></li>
              
             </ul>
             
 <?php
if ( in_category('4') || post_is_in_descendant_category(4) )
{
  include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('1') || post_is_in_descendant_category(1) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('13') || post_is_in_descendant_category(13) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('14') || post_is_in_descendant_category(14) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('15') || post_is_in_descendant_category(15) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('16') || post_is_in_descendant_category(16) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('17') || post_is_in_descendant_category(17) )
{
 include(TEMPLATEPATH .'/download1.php');
}
elseif ( in_category('18') || post_is_in_descendant_category(18) )
{
 include(TEMPLATEPATH .'/download1.php');
}
else{

  echo " <h5>Download</h5>";
}
?>


            
          <div class="clear"></div>
         </div> 
         <br>

         <div class="nn  ">
            
              <h3>Hot Articles</h3>
            
             <ul style="line-height:25px">
             <!-- -->
             <?php get_archives('postbypost', 10); ?>
              
             </ul>
          
          <div class="clear"></div>
         </div> 
         
         
      </div>
      </div><!--left end -->
	  </div>
</div>

<!--  --> 
<?php get_footer(); ?>

</body>
</html>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59e22cdaf675ce7d"></script> 
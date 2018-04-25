<?php /*Template Name:Reviews*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Reviews</title>
    <meta content="<?php strip_tags(the_excerpt());?>" name="Description">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="<?php bloginfo('template_directory')?>/css/bootstrap.min.css" rel="stylesheet">
<script type="text/javascript" src="<?php bloginfo('template_directory')?>/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory')?>/js/bootstrap.js"></script>

<link href="<?php bloginfo('template_directory')?>/css/global.css" rel="stylesheet">
<link href="<?php bloginfo('template_directory')?>/css/index.css" rel="stylesheet">
<link href="<?php bloginfo('template_directory')?>/css/fengye.css" rel="stylesheet">
<link href="<?php bloginfo('template_directory')?>/css/product.css" rel="stylesheet">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
 <link rel="shortcut icon" href="<?php bloginfo('template_directory')?>/images/favicon.ico" type="image/x-icon">  
   </head>
<body>

<?php get_header(); ?>





<div class="product reviews">

<div class="jianjie" style="background-image:url('<?php bloginfo('template_directory')?>/images/03.jpg');width:100%;min-height:200px;margin-top:2px;">
       <div class="container padding-left-right50">
          <?php while ( have_posts() ) : the_post(); ?>
                    
                      <h1 class="text-center"><?php the_title();?></h1>
          <p   class="text-center"><?php the_excerpt();?></p>
                     
                    <?php endwhile; // End of the loop. ?>
       </div>     
       
</div>


<div class="bg-nav"></div>
<div id="my-nav">
        <div class="container">
          <div class="row">
            <ul class="text-uppercase"  >
                	<li class="mobile" style="background:#06C;border-radius:5px; color:#fff;">Reviews</li>
                    <li class="col-md-4 col-sm-4 ">
<?php
if ( is_single('302'))
{
  echo "<a href='/iphone-data-recovery.html'>Overview</a>";
}
else if (is_single('310'))
{
 echo "<a href='/android-data-recovery.html'>Overview</a>";
}
else if (is_single('330'))
{
 echo "<a href='/photo-recovery.html'>Overview</a>";
}
else if (is_single('338'))
{
 echo "<a href='/video-converter.html'>Overview</a>";
}
else if (is_single('336'))
{
 echo "<a href='/video-editor.html'>Overview</a>";
}
else if (is_single('341'))
{
 echo "<a href='/iphone-backup-extractor.html'>Overview</a>";
}
else{
 echo "<a href=''>Overview</a>";
}
?>
</li>
                    <li class="col-md-4 col-sm-4  ">

<?php
if ( is_single('302'))
{
  echo "<a href='/guide/iphone-data-recovery.html'>User Guide</a>";
}
else if (is_single('310'))
{
 echo "<a href='/guide/android-data-recovery.html'>User Guide</a>";
}
else if (is_single('330'))
{
 echo "<a href='/guide/photo-recovery.html'>User Guide</a>";
}
else if (is_single('338'))
{
 echo "<a href='/guide/video-converter.html'>User Guide</a>";
}
else if (is_single('336'))
{
 echo "<a href='/guide/video-editor.html'>User Guide</a>";
}
else if (is_single('341'))
{
 echo "<a href='/guide/iphone-backup-extractor.html'>User Guide</a>";
}
else{
 echo "<a href=''>User Guide</a>";
}
?>
</li>
                    <li class="col-md-4 col-sm-4 active">

<?php
if ( is_single('302'))
{
  echo "<a href='/reviews/iphone-recovery-software.html'>Reviews</a>";
}
else if (is_single('310'))
{
 echo "<a href='/reviews/android-recovery-software.html'>Reviews</a>";
}
else if (is_single('330'))
{
 echo "<a href='/reviews/photo-recovery-software.html'>Reviews</a>";
}
else if (is_single('338'))
{
 echo "<a href='/reviews/video-converter-software.html'>Reviews</a>";
}
else if (is_single('336'))
{
 echo "<a href='/reviews/video-editor-software.html'>Reviews</a>";
}
else if (is_single('341'))
{
 echo "<a href='/reviews/itunes-backup-extractor.html'>Reviews</a>";
}
else{
 echo "<a href=''>Reviews</a>";
}
?>
</li>

            </ul>
             
          </div>
        </div>
</div>


<!-- hidden -->
<div class="aggregateRating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
	<span itemprop="reviewCount">180</span>Reviews
</div>
<!-- hidden -->
<div class="users">
    <div class="container">
         <?php while ( have_posts() ) : the_post(); ?>
        <h2>Ratings & Reviews</h2>
        <div class="comment_box"  style="padding:20px;">
            	<?php the_content(); ?>
             
        </div>
        
        <?php endwhile; // End of the loop. ?>
      <!--  <div class="comment_btn">LEAVE A COMMENT</div>-->
    </div>
</div>










</div>
      





 
<?php get_footer(); ?>

</body>
</html>


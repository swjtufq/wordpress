
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?php the_title(); ?></title>
    <meta content="" name="Description">
    <meta content=" Fucosoft resource, Fucosoft resource center, Fucosoft solutions  " name="keywords">
    
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
    <div class="container tree">Home > Resource ><?php the_title(); ?></div>
</div>
<div class="article  ">


<div class="container " id="article">

    <div class="row  ">
    
	
		
	
    
	
	<div class="col-md-9 article_left" style="min-height:700px;">
		 
           <div class="panel-body">
				 <div class="actions">
	    	
					<?php while ( have_posts() ) : the_post(); ?>
                     <h3  class="h3"><?php the_title(); ?></h3>
                     <div class="author"><?php the_date(); ?>| Posted by<a href="a3"> <?php the_author(); ?></a> to <a href="">iPhone Recovery</a></div>
                     <div class="article_content">
                     	<?php the_content(); ?>
                     </div>
                     
                    <?php endwhile; // End of the loop. ?>
              
	        
           
           
                   </div>   			
				
				
				
			</div>
	</div>
	<!-- right end -->
      <div class="col-md-3  article_right pm " style="margin-top:37px;" >
		<div class="nn ">
            
              <h3>Recommend Product</h3>
            
             <ul  class="lanmu">
                           <li><a href="/iphone-data-recovery.html">iPhone Data Recovery</a></li>
                          <li>  <a href="/android-data-recovery.html">Android Data Recovery</a></li>
                          <li> <a href="/video-converter.html">Video Converter</a></li>
                          <li> <a href="/photo-recovery.html">Photo Recovery</a></li>
                          <li> <a href="/video-editor.html">Video Editor</a></li>
                          <li> <a href="/iphone-backup-extractor.html">iPhone Backup Extractor</a></li>
              
             </ul>
             
             <div class="anniu">
                  <a  class="btn-left" href="#"><img src="<?php bloginfo('template_directory')?>/images/btnw.png"/>&nbsp;&nbsp;Download</a> 

                <a  class="btn-left" href="#"><img src="<?php bloginfo('template_directory')?>/images/btnx.png"/>&nbsp;&nbsp;Download</a>  
             </div>
          
          <div class="clear"></div>
         </div> 
         <br>

         <div class="nn  ">
            
              <h3>Hot Article</h3>
            
             <ul>
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


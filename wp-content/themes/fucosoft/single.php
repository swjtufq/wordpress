



<?php
if ( in_category('4') || post_is_in_descendant_category(4) )//可自行修改 这里包含分类目录里的文章和分类目录里的子分类目录里的文章
{
  include(TEMPLATEPATH .'/single-support.php');
}
elseif ( in_category('3') || post_is_in_descendant_category(3) )//如果只有两类single.php，可以不要这段，如果是多类，则添加多个elseif
{
  include(TEMPLATEPATH . '/single-guide.php');
}
elseif ( in_category('11') || post_is_in_descendant_category(11) )//如果只有两类single.php，可以不要这段，如果是多类，则添加多个elseif
{
  include(TEMPLATEPATH . '/single-reviews.php');
}
else{
  include(TEMPLATEPATH . '/single-support.php');
}//给其他分类的文章调用的。
?>

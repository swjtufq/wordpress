<?php

//��ȡ������ĳ��������ӷ���
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
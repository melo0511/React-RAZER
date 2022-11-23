import React from 'react';

export const Anchor = ({content,style}) => {
  return (
    <>
      <a href='#' className={style}>{content}</a>      
    </>
  )
}

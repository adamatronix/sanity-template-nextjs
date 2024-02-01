import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';

 
interface ArticleSearchBarProps {
}

const Wrapper = styled.form`
  ${fontstack.default}
  ${type('body01')}
  display: block;
`

const SearchInput = styled.input`
  
`

export const ArticleSearchBar = ({
  ...props
}: ArticleSearchBarProps) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter(); 
  const onSubmit = (data: any) => {
    router.push(`/article/search?search=${encodeURIComponent(data?.search)}`)
  }
  
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} {...props}>
      <SearchInput type="text" id='search' placeholder='search' {...register('search')}/>
    </Wrapper>
  );
};

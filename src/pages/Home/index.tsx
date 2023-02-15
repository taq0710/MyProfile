import { useAppDispatch, useAppSelector } from 'app/hooks';
import HomeComponent from 'components/pageComponents/Home/Item';
import { loginHome } from 'features/login/loginSlide';
import React,{useEffect} from 'react';

export interface  HomeProps {
}

export default function Home (props:  HomeProps) {
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector(state=>state.login)
  useEffect(()=>{
    dispatch({
      type:loginHome,
      payload:{
        email: "",
        password: ""
      }
    })
  },[])

  return (
    <div>
      <HomeComponent/>
    </div>
  );
}

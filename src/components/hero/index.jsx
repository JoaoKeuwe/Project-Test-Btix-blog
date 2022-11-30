import React from 'react'
import { useLocation } from 'react-router'
import Logo from '../../images/logo.webp'
import * as S from './style'

export function Hero() {
  const location = useLocation()

// Criando propriedade no Hero que de acordo com a URL troca a mensagem central, entre comentarios e posts
  const subTitle = () => {
    if (location.pathname === '/') {
      return 'Posts'
  }else return "Comentarios"
}

  return (
    <S.HeaderHero>
      <S.NavMenu>
        <img width={120} src={Logo} alt="Logo da empresa Btix" />
        <S.NavOptions>
          <a href='/'>Posts</a>
        </S.NavOptions>
      </S.NavMenu>
      <div>
        <h1>Blog Btix</h1>
        <h2>{subTitle()}</h2>
      </div>
    </S.HeaderHero>
  )
}

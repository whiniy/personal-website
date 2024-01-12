import React from 'react';

import getPortfolios from '../portfolio/portfoliodata'; 

import PortfolioPreview from '../../components/portfolioPrev';




export default async function Home(){

  const portfolioPosts = await getPortfolios()

  // console.log(portfolioPosts)

  if(portfolioPosts){

    return (

    <main>

      <h1>Portfolio</h1>

      <div>

        {portfolioPosts.map((portfolios) => (

          <div key={portfolios._id}>

            <PortfolioPreview {...portfolios._doc}

            />

          </div>

          )

        )}

      </div>

    </main>

  );

}else if(!portfolioPosts){

  <main>

    <p>No portfolio projects found...</p>

  </main>

}

}
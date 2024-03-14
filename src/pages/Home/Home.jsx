import React from "react";
import "./Home.scss";
import Hero from "../../component/Hero/Hero";

import Layout from "./../../Layout";

export default function Home() {
  return (
    <div className="home">
      <Layout>

        <Hero />
      </Layout>
    </div>
  );
}

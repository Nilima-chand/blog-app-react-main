import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PostList from "./PostList";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <Navbar />
      <PostList />
      <Footer />
    </div>
  );
}

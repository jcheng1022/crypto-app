import React from "react";
import axios from "axios";
import styles from "../../styles/News.module.css";

function News({ newsData }) {
  return (
    <div className={styles.container}>
      <h1> News</h1>
      <div class={styles.largeContainer}>
        {newsData.news.map((ele) => {
          return (
            <div className={styles.smallContainer}>
              <img src={ele.imgUrl} />
              <h2>
                <a href={ele.link}> {ele.title}</a>
              </h2>
              <h3> Source {ele.source}</h3>
              <p> {ele.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/news/trending?skip=0&limit=20"
  );
  return {
    props: {
      newsData: data.data,
    },
  };
};

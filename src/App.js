import React, { Component } from "react";
// import Disqus from "disqus-react";
import { DiscussionEmbed } from "disqus-react";

import "./App.css";

export default class extends Component {
  render() {
    const disqusShortname = "disqus-orbfoqnos4"; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3004", //this.props.pageUrl
      identifier: "disqus-awiah.id", //this.props.uniqueId
      title: "Title of Your Article" //this.props.title
    };

    return (
      <div className="article-container">
        <h1>Article Title</h1>

        <p>Article content.</p>

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

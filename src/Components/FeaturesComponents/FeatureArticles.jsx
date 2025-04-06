import "./FeatureArticles.css";
import { DummyArticle } from "./FeatureArticlesComponents/DummyArticle";


function FeatureArticles() {
  return (
    <div className="feature-articls">
      <h4>Features</h4>

      <div>
        <DummyArticle image="../image/invoice.png" title="Lorem Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam molestiae." />
        
        <DummyArticle image="../image/notes.png" title="Lorem Request" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam molestiae." />

        <DummyArticle image="../image/skills.png" title="Lorem Tracking" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam molestiae." />
      </div>
    </div>
  )
}

export {FeatureArticles};
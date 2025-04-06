import "./DummyArticle.css";


function DummyArticle({image, title, description}) {
  return (
    <div className="dummy-article">
      <img src={image} alt="" />
      <p className="title-root">{title}</p>
      <p className="description-root">{description}</p>
    </div>
  )
}

export {DummyArticle};
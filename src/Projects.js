function Project(props) {
  return (
    <>
      <div className="card mx-5 col" style={{ width: "18rem", minWidth:"auto" }}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
          <p className="card-text">
           {props.cardtext}
           
          </p>
        </div>
      </div>
    </>
  );
}
export default Project;

const NewConcept = props => {
  const conceptTitle = props.title;
  const conceptImgSrc = props.image;
  const conceptDesc = props.desc;

  return (
    <li className="concept">
          <img src={conceptImgSrc} alt={conceptTitle} />
          <h2>{conceptTitle}</h2>
          <p>{conceptDesc}</p>
    </li>
  )
}

export default NewConcept;
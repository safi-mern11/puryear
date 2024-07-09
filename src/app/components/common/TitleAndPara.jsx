function TitleAndPara({ extraClasses, title, para, titleStyle, paraStyle }) {
  return (
    <>
      <div className={`${extraClasses} w-full font-proximaNova`}>
        <h1 className={` ${titleStyle}   `}>{title}</h1>
        <p className={`${paraStyle}`}>{para}</p>
      </div>
    </>
  );
}

export default TitleAndPara;

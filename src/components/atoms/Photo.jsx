import "../../styles/atoms/Photo.css";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Photo = ({ className, src, alt }) => {
  /*
  picture 태그는 img보다 SEO에서 유리하다 
  picture 태그는 source와 img를 가질 수 있는데 
  source와 img 중 더 최적화 된(웹 최적화) 이미지를 가져온다.
  예로 용량이 큰 png, jpg 타입 보다 webp, webm 형태를 우선적으로 가져온다. 
  */
  return (
    <picture className={className}>
      <source srcSet={staticServerUri + src} />
      <img
        src={staticServerUri + src}
        alt={alt}
        className={`${className} photo-img`}
      />
    </picture>
  );
};

export default Photo;

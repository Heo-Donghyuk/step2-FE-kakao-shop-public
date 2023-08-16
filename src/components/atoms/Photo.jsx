import "../../styles/atoms/Photo.css";

// 크램폴린 배포 환경에서 로컬 이미지 이용시 이용했던 코드
//const staticServerUri = process.env.REACT_APP_PATH || "";

const Photo = ({ className, src, alt }) => {
  /*
  picture 태그는 img보다 SEO에서 유리하다 
  picture 태그는 source와 img를 가질 수 있는데 
  source와 img 중 더 최적화 된(웹 최적화) 이미지를 가져온다.
  예로 용량이 큰 png, jpg 타입 보다 webp, webm 형태를 우선적으로 가져온다. 
  */
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img
        src={src}
        // src={staticServerUri + src} // 크램폴린 환경
        alt={alt}
        className={`${className} photo-img`}
      />
    </picture>
  );
};

export default Photo;

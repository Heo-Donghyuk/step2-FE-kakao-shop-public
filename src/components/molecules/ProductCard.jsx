import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";

const REACT_APP_API_URL =
  "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`} className="">
      <div className="overflow-hidden h-64 border border-neutral-200 rounded-xl">
        <Photo
          className={"product-card-photo"}
          alt={product.productName}
          // 배포시 환경변수 문제로 인해 API 주소는 임시로 하드코딩했다.
          // src={`${process.env.REACT_APP_API_URL}${product.image}`}
          src={`${REACT_APP_API_URL}${product.image}`}
        />
      </div>
      <div className="mt-2 text-sm">{product.productName}</div>
      <div className="font-bold text-xl">
        <span className="text-lg text-blue-500">톡딜가 </span>
        <span>{comma(product.price)}원</span>
      </div>
    </Card>
  );
};
export default ProductCard;

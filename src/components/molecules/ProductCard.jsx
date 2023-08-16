import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`} className="">
      <div className="overflow-hidden h-64 border border-neutral-200 rounded-xl">
        <Photo
          className={"product-card-photo"}
          alt={product.productName}
          src={`${process.env.REACT_APP_API_URL}${product.image}`}
          // 크램폴린 배포 서버에서 이미지를 제공해 주지않아 public 이미지를 이용하도록 수정
          // src={`${product.image}`} // 크램폴린 배포용 src
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

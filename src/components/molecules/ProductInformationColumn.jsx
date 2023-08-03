import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import StarRating from "../atoms/StarRatinig";

const REACT_APP_API_URL =
  "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com";

const ProductInformationColumn = ({ product, className }) => {
  const { productName, price, image, starCount } = product;
  return (
    <div className="product-info-col border-r border-neutral-200">
      <div className="flex py-8 pr-8 max-w-4xl ">
        <div className="col flex-none">
          <Photo
            className="min-w-[430px] min-h-[430px] max-w-[430px] max-h-[430px]"
            // 배포시 환경변수 문제로 인해 API 주소는 임시로 하드코딩했다.
            // src={process.env.REACT_APP_API_URL + image}
            src={REACT_APP_API_URL + image}
            alt={productName}
          />
        </div>
        <div className="flex-none w-[430px] ml-7 mt-4">
          <StarRating starCount={starCount} className="pb-1" />
          <strong className="font-normal text-[26px] tracking-tight">
            {productName}
          </strong>
          <div className="pt-4 pb-2">
            <button className="h-11 rounded-3xl bg-[#ffeb00] px-4">
              <span className="text-[17px] font-normal">
                톡딜가{" "}
                <span className="text-lg font-[350]">{comma(price)}</span>원~
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="product-detail m-auto">
        <p className="border p-3 text-lg text-center">상품 상세정보</p>
        <div className="pt-10 h-[3000px] text-center">
          <span className="text-4xl text-neutral-500">
            상품 정보 준비 중입니다.
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductInformationColumn;

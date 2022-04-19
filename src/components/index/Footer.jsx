import React from "react";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="grid wide">
        <div className="row">
          <div className="col l-3 m-6 c-6">
            <div className="logo-footer">
              <img src="../image/logo2.svg" alt="" />
            </div>
          </div>
          <div className="col l-3" />
          <div className="col l-3 Footer-Hotline">
            <div className="positon-Hotline">Hotline</div>
            <div> 1900.63.3579</div>
          </div>
          <div className="col l-3 Footer-icon">
            <div className="row Footer-icon-end">
              <div className="backgroud-icon-footer">
                <i className="fab fa-youtube Footer-icon-item" />
              </div>
              <div className="backgroud-icon-footer">
                <i className="fab fa-facebook-square Footer-icon-item" />
              </div>
              <div className="backgroud-icon-footer">
                <i className="fab fa-instagram Footer-icon-item" />
              </div>
            </div>
          </div>
        </div>
        <div className="row Footer-text">
          <div className="col l-2 ">
            <h3 className="div">Sản phẩm và dịch vụ</h3>
            <div className="Footer-text-div">Laptop Dell</div>
            <div className="Footer-text-div">Laptop HP</div>
            <div className="Footer-text-div">Laptop ThinkPad</div>
            <div className="Footer-text-div">Laptop Lenovo</div>
          </div>
          <div className="col l-2">
            <div className="Footer-text-div">Alienware</div>
            <div className="Footer-text-div">Macbook</div>
            <div className="Footer-text-div">Laptop Razer</div>
            <div className="Footer-text-div">Phụ kiện</div>
          </div>
          <div className="col l-2">
            <h3 className="div">Chính sách</h3>
            <div className="Footer-text-div">Bảo hành</div>
            <div className="Footer-text-div">Vận chuyển</div>
            <div className="Footer-text-div">Thanh toán</div>
          </div>
          <div className="col l-2">
            <h3 className="div">Về ThinkPro</h3>
            <div className="Footer-text-div">Lịch sử thành lập</div>
            <div className="Footer-text-div">Giá trị cốt lõi</div>
            <div className="Footer-text-div">Tầm nhìn, sứ mệnh</div>
          </div>
          <div className="col l-2">
            <h3 className="div">Hệ thống cửa hàng</h3>
            <h3 className="Footer-text-div-B">Hà Nội:</h3>
            <h3 className="Footer-text-div-B">53 Thái Hà, Đống Đa, Hà Nội</h3>
            <div className="Footer-chiduong">Chỉ đường</div>
          </div>
          <div className="col l-2">
            <br />
            <h3 className="Footer-text-div-B">TP. Hồ Chí Minh</h3>
            <h3 className="Footer-text-div-B">Số 5 + 7 Nguyễn Huy</h3>
            <h3 className="Footer-text-div-B">Tưởng, P6, Q. Bình Thạnh</h3>
            <div className="Footer-chiduong">Chỉ đường</div>
            <h3 className="Footer-text-div-B">
              Số 95 Trần Thiện Chánh, Phuờng 12, Quận 10
            </h3>
            <div className="Footer-chiduong">Chỉ đường</div>
          </div>
        </div>
        <div className="row Footer-text">
          <div className="col l-12 Footer-text-div-end">Copyright (C) 2020</div>
          <div className="col l-12 Footer-text-div-end">
            Công ty TNHH Công nghệ Think Việt Nam | Số ĐKKD 0107273909 do Sở
            KHĐT Thành phố Hà Nội cấp ngày 30/12/2015. Email liên hệ:
            hi@thinkgroup.vn
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

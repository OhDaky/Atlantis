import React, { useState, useEffect } from "react";

import "./Style/Error404.css";

export default function Error404() {
  // function goMain(e) {
  //   window.location.href = ''
  // }

  return (
    <div>
      <div className="errorMessage">
        <div className="error404">404</div>
        <div className="page">잘못된 주소입니다!</div>
        <div className="page">아래 페이지로 이동하세요</div>
      </div>
    </div>
  );
}

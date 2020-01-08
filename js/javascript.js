function BannerActive(HTMLClass, index) {
    let BannerObj = $(".header-right").children("p").eq(index);
    BannerObj.on("mouseenter", function () {
        $(this).addClass("headerRight-active");
        $(HTMLClass).show();
    });
    $(HTMLClass).on("mouseleave", function () {
        BannerObj.removeClass("headerRight-active");
        $(this).hide();
    });
}

function BannerClose(HTMLClass, index, target) {
    let root = $(".header-right").children("p");
    let BannerObj = root.eq(index);
    let myJDObj = root.eq(target);
    BannerObj.on("mouseenter", function () {
        $(myJDObj).removeClass("headerRight-active");
        $(HTMLClass).hide();
    })
}

$(function ($) {
    BannerActive(".myJD", 2); // 导航条 - 我的京东
    BannerActive(".enterpriseBuy", 4); // 导航条 - 企业采购
    BannerActive(".customerServe", 5); // 导航条 - 客户服务
    BannerActive(".websiteGuide", 6); // 导航条 - 网站导航

    BannerClose(".myJD", 1, 2); // 导航条 - index: 我的订单
    BannerClose(".myJD", 3, 2); // 导航条 - index: 京东会员
    BannerClose(".enterpriseBuy", 3, 4); // 导航条 - index: 京东会员
    BannerClose(".enterpriseBuy", 5, 4); // 导航条 - index: 客户服务
    BannerClose(".customerServe", 4, 5); // 导航条 - index: 企业采购
    BannerClose(".customerServe", 6, 5); // 导航条 - index: 网站导航
    BannerClose(".websiteGuide", 5, 6); // 导航条 - index: 客户服务
    BannerClose(".websiteGuide", 7, 6); // 导航条 - index: 手机京东


});


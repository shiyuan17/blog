$(function(){
    $('.tab-panel-item').height($(window).height()-$('.tab-nav').height()-$('.creatGd').height())
    var $tab = $('#J_Tab');

    $tab.tab({
        nav: '.tab-nav-item',
        panel: '.tab-panel-item',
        activeClass: 'tab-active'
    });

    $tab.find('.tab-nav-item').on('opened.ydui.tab', function (e) {
        console.log('索引：%s - [%s]已经打开了', e.index, $(this).text());
    });
    // 首页 售后工单上拉加载更多
    $('.gd ul').pullRefresh({
        initLoad: true,
        loadFunction: function () {
            var def = $.Deferred();

            $.ajax({
                url: '/获取数据方法',
                dataType: 'json',
                success: function (ret) {
                    /* 假设ret.list为后端返回的列表数组 */

                    $('.gd ul').prepend(ret.list + '将数据拼接成html');

                    var tipStr = ret.length > 0 ? '为您更新了' + ret.length + '条内容' : '已是最新内容';

                    YDUI.dialog.toast(tipStr, 'none', 1500);

                    /* 处理完后调用resolve()方法 */
                    def.resolve();
                }
            });
            return def.promise();
        }
    });
    //问题展示页
    $('.cjwtList li .qContent').on('click',function(){
        var 
            top='img/top.png';
            bottom='img/bottom.png';

        if($(this).find('img').attr('src')==bottom){
            $(this).find('img').attr('src',top);
            $(this).siblings('.qDes').slideDown();
        }else if($(this).find('img').attr('src')==top){
            $(this).find('img').attr('src',bottom);
            $(this).siblings('.qDes').slideUp();
        }
        $(this).parent().siblings('li').find('.qDes').slideUp();
        $(this).parent().siblings('li').find('.qContent img').attr('src',bottom);
    })
    // 常见问题上拉加载更多
    $('#J_ListContent').pullRefresh({
        // initLoad: true,
        loadFunction: function () {
            var def = $.Deferred();
            $.ajax({
                url: 'json/more.json',
                dataType: 'json',
                success: function (ret) {
                    /* 假设ret.list为后端返回的列表数组 */
                    console.info(ret)
                    // $('.gd ul').prepend(ret.list + '将数据拼接成html');

                    // var tipStr = ret.length > 0 ? '为您更新了' + ret.length + '条内容' : '已是最新内容';

                    // YDUI.dialog.toast(tipStr, 'none', 1500);

                    /* 处理完后调用resolve()方法 */
                    // def.resolve();
                }
            });
            // return def.promise();
        }
    });
})
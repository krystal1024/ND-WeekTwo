window.onload = function() {

    // 左侧导航栏切换
    var oClassList = document.getElementById('classList');
    var aList = oClassList.getElementsByTagName('li');
    var now = 0;
    for (var i = 0; i < aList.length; i++) {
        aList[i].index = i

        aList[i].onclick = function() {
            now = this.index;
            for (var i = 0; i < aList.length; i++) {
                aList[i].className = 'vr-class-list';
            }
            aList[now].className = 'ui-on';

        }

    }
    // 班级作品和我的作品切换
    // 选项卡切换

    var oVrTab = document.getElementById('vrTab');
    var aVrLi = oVrTab.getElementsByTagName('li');
    var aVrCard = document.getElementsByClassName('class-card')[0];
    var aDivCard = aVrCard.children;
    for (var j = 0; j < aVrLi.length; j++) {
        aVrLi[j].index = j;
        aVrLi[j].onclick = function() {

            for (var n = 0; n < aVrLi.length; n++) {
                aVrLi[n].className = "var-tab__items";
                aDivCard[n].className = "no-source";
            }
            this.className = "var-tab__items choose-this";
            aDivCard[this.index].className = "vr-card-main";
            // aVrCard[this.index].removeClass = "no-source";
        };
    }


    // 新建作品

    var oLi = document.getElementById('newadd');
    var oDiv = document.getElementById('addworks');
    var oBtn = document.getElementById('works-close');

    var oBtnConfirmWork = document.getElementsByClassName('submit');

    oLi.onclick = function() {
        oDiv.style.display = 'block';
    };
    oBtn.onclick = function() {
        oDiv.style.display = 'none';

    };
    oBtnConfirmWork.onclick = function() {
        var oInputTitle = document.getElementsByClassName('works-name');
        var oTextIndro = document.getElementsByClassName('works-introduce');
        alert(oInputTitle);
        var isSuccess = 1;
    };
    // 添加组员
    var oBtnAdd = document.getElementById('btn-add-authors');
    var oDivClassMember = document.getElementById('classmember');
    var oDivAuthor = document.getElementById('works-authors');
    var aLiAuthor = oDivAuthor.getElementsByTagName('li');
    // 选择组员（左侧列表）
    var oDivMemberList = document.getElementById('memberList');
    var oUlMember = oDivMemberList.getElementsByTagName('ul')[0];
    var aLiMember = oUlMember.getElementsByTagName('li');
    // 已经添加的按钮和DIV（右侧列表）
    var oDivCHoose = document.getElementById('chooseMember');
    var oUlAddMember = oDivCHoose.getElementsByTagName('ul')[0];
    var oBtnAddMember = document.getElementById('addMember');
    var oBtnDeleteMember = document.getElementById('deleteMember');
    var oBtnConfirmMember = document.getElementById('confirm');
    // 关闭选择组员窗口
    var oBtnClose = document.getElementsByClassName('works-close')[0];
    oBtnClose.onclick = function() {
        oDivClassMember.style.display = 'none';

    };
    oBtnAdd.onclick = function() {
        oDivClassMember.style.display = 'block';
        oDivAuthor.value = '';

    };

    for (var i = 0; i < aLiMember.length; i++) {
        aLiMember[i].onclick = function() {
            for (var i = 0; i < aLiMember.length; i++) {
                aLiMember[i].style.background = 'none';
            }
            this.style.background = "#c3e5fa";
            var oLiValue = this.innerHTML;

            oBtnAddMember.onclick = function() {
                var oLiAdd = document.createElement('li');
                oLiAdd.innerHTML = oLiValue;
                oUlAddMember.appendChild(oLiAdd);

                var aLiMember = oUlAddMember.getElementsByTagName('li');
                for (var j = 0; j < aLiMember.length; j++) {
                    aLiMember[j].onclick = function() {
                        for (var j = 0; j < aLiMember.length; j++) {
                            aLiMember[j].style.background = 'none';
                        }
                        this.style.background = "#c3e5fa";
                        var oLiDelecte = this;
                        oBtnDeleteMember.onclick = function() {
                            oUlAddMember.removeChild(oLiDelecte);
                        };

                    };
                    oBtnConfirmMember.onclick = function() {
                        if (oUlAddMember.children.length > 0) {
                            for (var j = 0; j < aLiMember.length; j++) {
                                var oLIlist = document.createElement('li');
                                oLIlist.innerHTML = aLiMember[j].innerHTML;
                                oDivAuthor.appendChild(oLIlist);
                                oDivClassMember.style.display = 'none';
                            }
                        } else {
                            confirm('您还没有选择成员哦！');
                        }
                    };
                }
            };


        };
    }

    // 在新建作品框，删除组员
    // for (var i = 0; i < oDivAuthor.children.length; i++) {
    //     alert(oDivAuthor.children[0].innerHTML);
    //     oDivAuthor.children[i].onclick = function() {
    //         oDivAuthor.removeChild(this);
    //     };
    // }

    // 搜索成员名字
    var oDivSearch = document.getElementById('search-member');
    var oTxtInput = oDivSearch.children[0];
    var oBtnSearch = oDivSearch.children[1];
    oBtnSearch.onclick = function() {
        for (var i = 0; i < aLiMember.length; i++) {
            var Tab = aLiMember[i].innerHTML.toLowerCase()
            var Txt = oTxtInput.value.toLowerCase()

            if (Tab.search(Txt) != -1) {
                aLiMember[i].style.background = '#c3e5fa';
            } else {
                aLiMember[i].style.background = '';

            }
        }
    };


};
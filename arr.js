/**
 * 删除数组中的某个元素
 * 直接调用该函数，不需要接收返回值
 */
function removeByValue(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
const Tools = {
    // 导出文件
    exportJson(name, data) {
        const blob = new Blob([data]);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = name; // 设置下载的默认文件名
        link.click(); // 触发点击事件，开始下载
    }
};

export default Tools;
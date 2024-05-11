const fs = require('fs');
const path = require('path');

async function processFilesInDirectory(directoryPath) {
    try {
        // 读取目录下的所有文件
        const files = fs.readdirSync(directoryPath);

        // 遍历每个文件
        for (const file of files) {
            const filePath = path.join(directoryPath, file);

            // 读取文件内容
            let content = fs.readFileSync(filePath, 'utf8');

            if(content.includes('this.onerror')) {
                continue;
            }

            // 使用正则表达式进行替换
            content = content.replace(
                /<img\s*([^>]*)src="https:\/\/cdn\.jsdelivr\.net\/gh\/[^\/]+\/[^\/]+\/assets\/img\/([^"]+)"([^>]*)>/g,
                '<img $1src="https://cdn.jsdelivr.net/gh/tggsearch/tggsearch.github.io/assets/img/$2"$3 onerror="this.onerror=null;this.src=\'/assets/img/$2\'">'
            );

            // 写入替换后的内容到文件中
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`文件 ${filePath} 处理完成`);
        }

        console.log('所有文件处理完成');
    } catch (error) {
        console.error('处理文件时出错:', error);
    }
}

// 指定要处理的目录
const directoryPath = './_posts';

// 调用函数处理目录下的所有文件
processFilesInDirectory(directoryPath);
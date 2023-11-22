const fs = require('fs').promises;
const path = require('path');

async function renameFiles(directoryPath, destinationPath) {
    try {
        // 读取目录下的所有文件
        const files = await fs.readdir(directoryPath);

        // 创建目标文件夹
        await fs.mkdir(destinationPath, { recursive: true });

        // 遍历文件
        for (const filename of files) {
            const filePath = path.join(directoryPath, filename);

            // 确保是文件而不是子目录
            const stats = await fs.stat(filePath);
            if (stats.isFile()) {
                // 获取文件的修改时间
                const fileMtime = stats.mtime;
                // 格式化日期
                const formattedDate = fileMtime.toISOString().split('T')[0];

                // 构建新的文件名
                const newFilename = `${formattedDate}-${filename}`;

                // 构建新的文件路径
                const newFilePath = path.join(destinationPath, newFilename);

                // 重命名文件
                await fs.rename(filePath, newFilePath);
                console.log(`File ${filename} renamed to ${newFilename}`);
            }
        }

        console.log('All files renamed successfully.');
    } catch (error) {
        console.error('Error:', error);
    }
}

// 替换 'your_directory_path' 为你的文档目录的实际路径
// 替换 'your_destination_path' 为你希望将文件重命名后存放的目标文件夹路径
renameFiles('docs', '_posts');

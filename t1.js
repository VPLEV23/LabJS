class GraphicFile {
    constructor(fileName, createDate, lastEditDate, size, colorDepth) {
        Object.defineProperty(this, "CreateDate", {  // const
            value:createDate,
            writable:false
        });
        this.FileName = fileName.split(".");
        this.LastEditDate = lastEditDate;
        this.Size = size.split("x");
        this.ColorDepth = colorDepth; 
    }
    GetLastEditDateFromNow() {
        return new Date()-this.LastEditDate;
    }

    GetFileSize() {
        return this.Size[0] * this.Size[1] * this.ColorDepth;
    }

    Rename(name) {
        this.FileName[0] = name;
    }

    ChangeFormat(format) {
        this.FileName[1] = format;
    }

    GetColorCount() {
        return Math.pow(2, this.ColorDepth);
    }

    toString() {
        return `File name: ${this.FileName[0]}.${this.FileName[1]}<br>Create date:
             ${this.CreateDate}<br>Last edit date: ${this.LastEditDate}
             <br>Size: ${this.Size[0]}x${this.Size[1]}<br>Color depth: ${this.ColorDepth}`;
    }
}

let gf = new GraphicFile("image.png", new Date(2000, 1, 1), new Date(2001, 2, 2), "12x12", 32);
document.write(gf);
gf.Rename("icon");
gf.ChangeFormat("jpg");
document.write("<br><br>Color count: "+ gf.GetColorCount());
document.write("<br>Date from the last edit: " + gf.GetLastEditDateFromNow() +" ms");
document.write("<br>File size (bits): " + gf.GetFileSize() + "<br><br>");
document.write(gf);
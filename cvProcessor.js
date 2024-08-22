import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

try {
    const loader = new PDFLoader("cv.pdf", {
        splitPages: false
    });
    const docs = await loader.load();
    // console.log(docs)
    console.log(docs[0].pageContent)

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 600,
        separators: ['\n\n', '\n', ' ', ''],
        chunkOverlap: 100
    })
    const output = await splitter.createDocuments([docs[0].pageContent])
    console.log(output)

} catch (error) {
    console.error(error)
}
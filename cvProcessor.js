import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js"
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from '@langchain/openai'

try {
    const loader = new PDFLoader("cv.pdf", {
        splitPages: false
    });
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 600,
        separators: ['\n\n', '\n', ' ', ''],
        chunkOverlap: 100
    })
    const output = await splitter.createDocuments([docs[0].pageContent])
    // console.log(output)

    const sbApiKey = process.env.SUPABASE_API_KEY
    const sbUrl = process.env.SUPABASE_URL_PROFILE_AGENT
    const openAIApiKey = process.env.OPEN_AI_API_KEY

    const client = createClient(sbUrl, sbApiKey)
    await SupabaseVectorStore.fromDocuments(
        output,
        new OpenAIEmbeddings({openAIApiKey}),
        {
            client,
            tableName: 'documents'
        }
    )

} catch (error) {
    console.error(error)
}
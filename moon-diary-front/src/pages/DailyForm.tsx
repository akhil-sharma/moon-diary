import React from "react";
import { Editor } from "@tinymce/tinymce-react";


function DailyForm() {
    return (
        <Editor
          apiKey='b9h77f88nci3n9vxpxjawnb700y8dpr2hcpqz5lmyvlnq59d'
          init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | numlist bullist indent outdent',
          }}
          initialValue="Welcome to TinyMCE!"
        />
    );
}

export default DailyForm;
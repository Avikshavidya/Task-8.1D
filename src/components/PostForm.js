import React, { useState } from 'react';
import { Form, Button, Input, TextArea, Radio } from 'semantic-ui-react';

function PostForm() {
    const [postType, setPostType] = useState('article'); // Default to article
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement what happens when the form is submitted, e.g., save to Firebase
        console.log({ postType, title, abstract, articleText, tags });
    };

    const handleImageUpload = (event) => {
        // Handle image file upload logic here
        console.log(event.target.files[0]);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                Select Post Type: <b>{postType}</b>
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Question'
                    name='postType'
                    value='question'
                    checked={postType === 'question'}
                    onChange={() => setPostType('question')}
                />
                <Radio
                    label='Article'
                    name='postType'
                    value='article'
                    checked={postType === 'article'}
                    onChange={() => setPostType('article')}
                />
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <Input placeholder='Enter a descriptive title' value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Add an image:</label>
                <Button
                    as="label"
                    htmlFor="file"
                    type="button"
                    animated="fade"
                >
                    <Button.Content visible>
                        <span>Browse</span>
                    </Button.Content>
                    <Button.Content hidden>File</Button.Content>
                </Button>
                <input
                    type="file"
                    id="file"
                    hidden
                    onChange={handleImageUpload}
                />
                <Form.Button onClick={() => { /* logic to handle upload */ }}>
                    Upload
                </Form.Button>
            </Form.Field>
            <Form.Field>
                <label>Abstract</label>
                <TextArea placeholder='Enter a 1-paragraph abstract' value={abstract} onChange={e => setAbstract(e.target.value)} />
            </Form.Field>
            {postType === 'article' && (
                <Form.Field>
                    <label>Article Text</label>
                    <TextArea placeholder='Enter the article text' value={articleText} onChange={e => setArticleText(e.target.value)} />
                </Form.Field>
            )}
            <Form.Field>
                <label>Tags</label>
                <Input placeholder='Please add up to 3 tags' value={tags} onChange={e => setTags(e.target.value)} />
            </Form.Field>
            <Button type='submit'>Post</Button>
        </Form>
    );
}

export default PostForm;

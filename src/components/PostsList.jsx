import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

export default function PostsList() {
	const posts = useLoaderData(); //  hook to provide the value returned from the route loader.

	function addPostHandler(postData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		});

		setPosts(exisitingPosts => [postData, ...exisitingPosts]);
	}

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post, index) => (
						<Post key={index} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet.</h2>
					<p>Starting adding some!</p>
				</div>
			)}
		</>
	);
}

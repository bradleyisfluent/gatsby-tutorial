// Step 1: Import React
import * as React from 'react';
import { graphql } from 'gatsby';
export const query = graphql`
	query events {
		allEvent {
			nodes {
				id
				datetime_start
				datetime_end
				site {
					id
					name
				}
				signup_options {
					embed {
						enabled
						visible
					}
					public {
						enabled
						visible
						featured
					}
				}
				category {
					id
					name
				}
				status
				name
				identifier
			}
		}
	}
`;

// Step 2: Define your component
const IndexPage = ({ data }) => {
	return (
		<main>
			<title>Events</title>
			{data.allEvent.nodes.map(m => (
				<div key={m.id}>
					<h1>
						{m.name} - {m.identifier}
					</h1>
					<h4>
						{m.datetime_start} - {m.datetime_end}
					</h4>
					<h5>status: {m.status}</h5>
					<p>site: {m.site?.name}</p>
					<p>category: {m.category.name}</p>
					<p>embed signup: {JSON.stringify(m.signup_options)}</p>
					<button
						onClick={() =>
							require
								.resolve(
									`../../../churchsuite-events-gatsby-plugin`
								)
								.signUp(m.identifier, {
									first_name: 'Mark',
									last_name: 'Davies',
									mobile: '',
									email: 'mark.davies@gmail.com',
								})
						}
					>
						Sign up
					</button>
				</div>
			))}
		</main>
	);
};
// Step 3: Export your component
export default IndexPage;

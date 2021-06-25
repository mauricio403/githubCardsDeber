import React from 'react'

 export const CardList = ({profiles}) => (
	<div>
  	{profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);




export const Card = ({name, company, avatar_url}) => {


	return (
		<div className="github-profile">
			<img src={avatar_url}/>
			<div className='info'>
				<div className="name">{name}</div>
				<div className="company">{company}</div>
			</div>
			
		</div>
	);
}

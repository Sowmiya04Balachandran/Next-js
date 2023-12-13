import React from 'react';

const teamDetails = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

const TeamMember = ({ name, role }) => (
  <div>
    <h1>{name}</h1>
    <p>{role}</p>
  </div>
);

const TeamMemberPage = ({ member }) => {
  return (
    <div>
      <h1>About Us - Team Member</h1>
      {member ? <TeamMember name={member.name} role={member.role} /> : 'Developer doesn\'t exist'}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const id = parseInt(query.id, 10);
  const member = teamDetails.find((item) => item.id === id);
  return {
    props: {
      member,
    },
  };
}

export default TeamMemberPage;
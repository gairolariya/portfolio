
export const JobDetails = ({ paragraph, listItems }) => {
  return (
    <div>
      <p>{paragraph}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { BookDocContext } from '../../../public/Context/bookContext';
import { use } from 'react';

// Sample data
// const data = [
//   { name: 'Page A', uv: 400 },
//   { name: 'Page B', uv: 300 },
//   { name: 'Page C', uv: 300 },
//   { name: 'Page D', uv: 200 },
//   { name: 'Page E', uv: 278 },
//   { name: 'Page F', uv: 189 },
// ];


const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};

// Custom shape path
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

// Triangle shape component
function TriangleBar({ fill, x, y, width, height }) {
  if (x == null || y == null || width == null || height == null) {
    return <></>;
  }

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={fill}
    />
  );
}

export default function TriangleChart() {
    const {bookedDoctors}=use(BookDocContext)
    //console.log(bookedDoctors)
  return (
    <div className="w-full h-[350px] p-4 bg-base-200 rounded-xl shadow">
<ResponsiveContainer width="100%" height="100%">
        <BarChart data={bookedDoctors} margin={margin}>
      <XAxis dataKey="name" />
      <YAxis 
       label={{
            value: 'Consultation fee',
            angle: -90,
            position: 'insideLeft',
            dy: 50,
          }}
      />
      <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} />
    </BarChart>
    </ResponsiveContainer>
    </div>
    
  );
}

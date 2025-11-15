import Link from "next/link";
import DSTabs from '@repo/design-system/tabs/tabs'

interface AstronomicalProps {
  params: Promise<{id: string;}>;
};

export default async function Astronomical({ params }: AstronomicalProps) {

  const { id } = await params;

  const conent = (id: string) => {
    return (
      <div>
        <h3>Astronomical bot #{id}</h3>
        <p>Lorem ipsum</p>
        <Link href="/astronomical">Back to Astronomical</Link>
      </div>
    )
  };
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: (
        <div>
          <h3>Tab 1</h3>
          {conent(id)}
        </div>
      ),
    },
    {
      key: '2',
      label: 'Tab 2',
      children: (
        <div>
          <h3>Tab 2</h3>
          {conent(id)}
        </div>
      ),
    },
  ];

  return (
    <div>
      <DSTabs 
        items={items}
        id="astronomical-tabs"
      />
    </div>
  );
}


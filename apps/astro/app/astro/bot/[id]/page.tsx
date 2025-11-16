import Link from 'next/link';
import DSTabs from '@repo/design-system/tabs/tabs'
import Agent from '../../../../common/Agent'

interface BotProps {
  params: Promise<{id: string;}>;
};

export default async function Bot({ params }: BotProps) {

  const { id } = await params;

  const conent = (id: string) => {
    return (
      <div>
        <h3>Astro bot #{id}</h3>
        <p>Lorem ipsum</p>
        <Link href="/astro">Back to Astro</Link>
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
          <Agent/>
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
        id="bot-tabs"
      />
    </div>
  );
}


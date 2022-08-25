interface TiplocTagProps {
  data: string;
}

export function TiplocTag({ data }: TiplocTagProps): JSX.Element {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

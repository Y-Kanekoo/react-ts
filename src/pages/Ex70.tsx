import React, { useState } from "react";
import { sexOptions } from "./constnats/data";
import { hobbyOptions } from "./constnats/data";
import { LikeWords } from "./constnats/data";

const Ex70: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("太郎"); //名
  const [lastName, setLastName] = useState<string>("山田"); //性
  const [age, setAge] = useState<number>(24); //年齢
  const [isSex, setIsSex] = useState<string>(sexOptions.man); //性別
  const [hobbies, setIsHobbies] = useState<string[]>([hobbyOptions.swim]); //趣味
  const [isLikewords, setIsLikewords] = useState<string[]>([]); //好きな言葉
  //   const [isOther, setIsOther] = useState<string>(""); //その他
  // const [isRobbot, setIsRobot] = useState<boolean>(false); //ロボット
  // const [isSubmit, setIsSubmit] = useState<boolean>(false); //送信ボタン

  // const [isSubmit, setIsSubmit] = useState<boolean>(false); //送信ボタン
  const handleClickLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  // 名の入力を受け付ける関数
  const handleClickFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  // 年齢の入力を受け付ける関数
  const handleClickAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value ? parseInt(value, 10) : 0; // 数値に変換
    setAge(numericValue);
  };

  // 性別の選択を受け付ける関数
  const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSex(event.target.value);
  };

  // 趣味のチェックボックスの変更を受け付ける関数
  const handleMultiCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setIsHobbies((prevHobbies) => {
      if (prevHobbies.includes(value)) {
        // 既に選択されている場合は配列から削除 (チェックを外した時)
        return prevHobbies.filter((hobby) => hobby !== value);
      } else {
        // 選択されていない場合は配列に追加 (チェックした時)
        return [...prevHobbies, value];
      }
    });
  };

  // 好きな言葉の選択を受け付ける関数
  const handleChangeLikewords = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setIsLikewords((prev) => {
      if (prev.includes(value)) {
        return prev.filter((word) => word !== value); // 既に選択されている場合は削除
      } else {
        return [...prev, value]; // 新しい言葉を追加
      }
    });
  };
  //   その他の入力を受け付ける関数;
  //   const handleChangeOther = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setIsOther(event.target.value);
  //   };
  //   // ロボットのチェックボックスの変更を受け付ける関数
  //   const handleChangeRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setIsRobot(event.target.checked);
  //   };

  //   // 送信ボタンのクリックを受け付ける関数
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault(); // フォームのデフォルトの送信を防ぐ
  //     setIsSubmit(true); // 送信ボタンがクリックされたことを記録
  //     // ここで送信処理を行うことができます
  //   };

  return (
    <div>
      <h1>アンケートフォーム</h1>
      <form method="post" action="#">
        <div>
          <label htmlFor="name">性：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={lastName}
            onChange={handleClickLastName}
          />
          /入力した姓:
          <br />
          <hr />
        </div>
        <div>
          <label htmlFor="name">名：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={firstName}
            onChange={handleClickFirstName}
          />
          /入力した名:
          <br />
          <hr />
        </div>
        入力したフルネーム: {lastName} {firstName}
        <br />
        <hr />
        <div>
          年齢：
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={handleClickAge}
          />
          /入力した年齢：{age}
          <br />
          <hr />
        </div>
        <div>10年後の年齢：{age + 10}</div>
        <hr />
        <div>
          性別:
          <input
            type="radio"
            name="sex"
            id="man"
            value={sexOptions.man}
            checked={isSex === sexOptions.man}
            onChange={handleChangeSex}
          />
          男性
          <input
            type="radio"
            name="sex"
            id="woman"
            value={sexOptions.woman}
            checked={isSex === sexOptions.woman}
            onChange={handleChangeSex}
          />
          女性
          <input
            type="radio"
            name="sex"
            id="other"
            value={sexOptions.other}
            checked={isSex === sexOptions.other}
            onChange={handleChangeSex}
          />
          その他 / チェックした性別 :{isSex}
          <br />
          <hr />
        </div>
        <div>
          趣味：
          <input
            type="checkbox"
            name="hobby"
            id="hobby"
            value={hobbyOptions.swim}
            checked={hobbies.includes(hobbyOptions.swim)}
            onChange={handleMultiCheckboxChange}
          />
          水泳
          <input
            type="checkbox"
            name="hobby"
            id="hobby"
            value={hobbyOptions.bike}
            checked={hobbies.includes(hobbyOptions.bike)}
            onChange={handleMultiCheckboxChange}
          />
          自転車
          <input
            type="checkbox"
            name="hobby"
            id="hobby"
            value={hobbyOptions.run}
            checked={hobbies.includes(hobbyOptions.run)}
            onChange={handleMultiCheckboxChange}
          />
          ランニング / チェックした趣味 :{hobbies.join(", ")}
          <br />
          <hr />
        </div>
        <div>
          好きな言葉：
          {LikeWords.map((word) => (
            <span key={word}>
              <input
                type="checkbox"
                name="likewords"
                value={word}
                checked={isLikewords.includes(word)}
                onChange={handleChangeLikewords}
              />
              {word}
            </span>
          ))}
          / チェックした好きな言葉 : {isLikewords.join(", ")}
          <br />
          <hr />
        </div>
      </form>
    </div>
  );
};

export default Ex70;

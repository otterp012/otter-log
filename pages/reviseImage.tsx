import React, { useState } from "react";
import { InputWithLabel } from "components";
import * as Select from "@over-ui/select";

const ReviseImage = () => {
  const [fetchState, setFetchState] = useState("fetched.idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFetchState("fetched.pending");
    const target = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(target));
    const { password, slug, databaseName } = data;
    try {
      const response = await fetch("/api/reviseImage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-images-passcode": password as string,
        },
        body: JSON.stringify({
          slug,
          databaseName,
        }),
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }

    setFetchState("fetched.fulfilled");
  };

  const style = {
    input: "px-3 py-2 text-black rounded-sm",
    label: "font-bold",
  };

  return (
    <div className='flex h-[75vh] flex-col items-center justify-center space-y-10'>
      <h2 className='text-2xl font-bold italic md:text-4xl'>
        REVISE IMAGE URL PAGE
      </h2>

      <p className='break-keep px-5 text-center text-sm md:w-[70%] md:text-xl'>
        노션 이미지 사용과정에서 발생한 문제를 해결하기 위해 생성한
        페이지입니다.
        <br />
        유효한 비밀번호와 경로가 입력되면 해당 경로 페이지의 이미지들은
        클라우드로 전송되고, 노션페이지의 이미지 Url들의 경로또한 수정됩니다.
      </p>

      <em className='block text-center'>
        비밀번호가 유효하지 않으면 동작하지 않습니다.
      </em>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center gap-2 md:flex-row'
      >
        <Select.Root name='databaseName'>
          <Select.Trigger>
            {({ selectedValue }) =>
              selectedValue ? selectedValue : "databaseName"
            }
          </Select.Trigger>
          <Select.Options className='absolute'>
            <Select.Option value='post'>post</Select.Option>
            <Select.Option value='book'>book</Select.Option>
          </Select.Options>
        </Select.Root>

        <InputWithLabel
          inputProps={{
            name: "password",
            type: "password",
            id: "password",
            className: style.input,
          }}
          labelProps={{
            htmlFor: "password",
            className: style.label,
          }}
          labelName='password'
        />
        <InputWithLabel
          inputProps={{
            name: "slug",
            id: "slug",
            className: style.input,
          }}
          labelProps={{
            htmlFor: "slug",
            className: style.label,
          }}
          labelName='slug'
        />
        <button
          type='submit'
          className='mt-5 rounded-md bg-light-text px-4 py-2 font-semibold text-white disabled:bg-dark-text md:ml-5 md:mt-0'
          disabled={fetchState === "fetched.pending" ? true : false}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ReviseImage;

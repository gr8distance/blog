import PinDropIcon from '@mui/icons-material/PinDrop';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';

export const Me = () => {
  return (
    <article
      className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
    >
      <img
        alt="Office"
        src="/me.jpg"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Yuji Masuo
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <PinDropIcon />
          <span className="ml-1">沼津(Numazu)</span>
        </p>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <DirectionsBikeIcon />
          <span className="ml-1">SR(2019)/熊野古道HC(2019)7位</span>
        </p>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <DirectionsRunIcon />
          <span className="ml-1">ITJ AA28(2023)完走</span>
        </p>
      </div>

      <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          開発スキル
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <TerminalIcon />
          <span className="ml-1">Ruby/Elixir/Rust</span>
        </p>
      </div>

      <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          お問い合わせ
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <TwitterIcon />
          <Link href="https://twitter.com/gr8distance" className="ml-1" target="_blank">@gr8distance</Link>
        </p>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          <GitHubIcon />
          <Link href="https://github.com/gr8distance" className="ml-1" target="_blank">@gr8distance</Link>
        </p>
      </div>
    </article>
  )
}

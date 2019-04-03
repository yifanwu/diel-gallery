import { DielRuntime, WorkerConfig, DbType } from "diel";
import { loadPage } from ".";
export const DEMO_WITH_SOCKET = false;

const dbPathPrefix = "./assets/data/";

const jsFile = "./assets/js/worker.sql.js";

const dbConfigs: WorkerConfig[] = [
  {
    dbType: DbType.Worker,
    jsFile,
    dataFile: `${dbPathPrefix}fires.sqlite`
  },
  {
    dbType: DbType.Worker,
    jsFile,
    dataFile: `${dbPathPrefix}flights.small.sqlite`
  },
]

// slightly weird location I suppose
const dielPrefix = "./assets/diel/";

const dielFiles = [
  // local
  `${dielPrefix}counter.diel`,
  `${dielPrefix}undo.diel`,
  // remote
  `${dielPrefix}flights-remote.diel`,
  `${dielPrefix}fires-remote.diel`,
   // `${dielPrefix}pitchfork-remote.diel`
];

const mainDbPath = `${dbPathPrefix}score.sqlite`;
// const mainDbPath: string = null;

// DEMO_WITH_SOCKET ? [{url: "ws://localhost:8999", dbName: "flights"}]

export const diel = new DielRuntime({
  isStrict: false,
  showLog: false,
  setupCb: loadPage,
  dielFiles,
  mainDbPath,
  dbConfigs,
});
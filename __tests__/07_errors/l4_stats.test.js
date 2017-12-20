import HexletFs from '../../src/07_errors/l4_stats/HexletFs';

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
  });

  it('#mkdirSync', () => {
    files.mkdirSync('/etc');
    expect(files.statSync('/etc').isDirectory()).toBeTruthy();

    files.mkdirSync('/etc/nginx');
    expect(files.statSync('/etc/nginx').isDirectory()).toBeTruthy();
  });

  it('#mkdirSync2', () => {
    files.mkdirSync('/var/');
    expect(files.statSync('/var////').isDirectory()).toBeTruthy();
    expect(files.statSync('/var').isDirectory()).toBeTruthy();

    files.mkdirSync('/var//log//////');
    expect(files.statSync('/var/log').isDirectory()).toBeTruthy();
    expect(files.statSync('/var///log').isDirectory()).toBeTruthy();
  });

  it('#touchSync', () => {
    files.touchSync('/file.txt');
    expect(files.statSync('/file.txt').isFile()).toBeTruthy();

    files.mkdirSync('/etc');
    files.touchSync('/etc/bashrc');
    expect(files.statSync('/etc/bashrc').isFile()).toBeTruthy();
  });
});

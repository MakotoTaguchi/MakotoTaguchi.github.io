'utf-8';

// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
    // サイズを指定
    const width = 960;
    const height = 540;
    let rot = 0; // 角度
    let mouseX = 0; // マウス座標

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);   //(画角,アスペクト比,描画開始距離,描画終了距離)
    camera.position.set(0, 500, +1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // コンテナーを作成
    const container = new THREE.Object3D();
    scene.add(container);

    // マテリアルを作成
    const material1 = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        wireframe: true,
        side: THREE.DoubleSide
    });

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight);
    // 環境光を作成
    const ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    // 球体を作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);    //(幅,高さ,奥行き)
    // 画像を読み込む
    const loader = new THREE.TextureLoader();
    const texture = loader.load('image/earthmap1k.jpg');
    // マテリアルにテクスチャーを設定
    const material2 = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    // メッシュを作成
    const earthMesh = new THREE.Mesh(geometry, material2);
    // 3D空間にメッシュを追加
    scene.add(earthMesh);

    // ジオメトリを作成
    const geometryList = [
        new THREE.SphereGeometry(50),   //球体
        new THREE.BoxGeometry(100, 100, 100), //直方体
        new THREE.PlaneGeometry(100, 100),   //平面
        new THREE.TetrahedronGeometry(100, 0),   //カプセル形状
        new THREE.ConeGeometry(100, 100, 32), //三角錐
        new THREE.CylinderGeometry(50, 50, 100, 32),   //円柱
        new THREE.TorusGeometry(50, 30, 16, 100)   //ドーナツ状
    ];

    geometryList.map((geometry, index) => {
        //形状とマテリアルからメッシュを作成します
        const mesh = new THREE.Mesh(geometry, material1);

        //3D表示インスタンスのsceneプロパティーが3D表示空間となります
        container.add(mesh);

        //円周上に配置
        mesh.position.x = 400 * Math.sin((index / geometryList.length) * Math.PI * 2);
        mesh.position.z = 400 * Math.cos((index / geometryList.length) * Math.PI * 2);
    });

    // 星屑を作成します (カメラの動きをわかりやすくするため)
    createStarField();

    /** 星屑を作成します */
    function createStarField() {
        // 頂点情報を作詞絵
        const vertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = 3000 * (Math.random() - 0.5);
            const y = 3000 * (Math.random() - 0.5);
            const z = 3000 * (Math.random() - 0.5);

            vertices.push(x, y, z);
        }

        // 形状データを作成
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // マテリアルを作成
        const material = new THREE.PointsMaterial({
            size: 10,
            color: 0xffffff,
        });

        // 物体を作成
        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
    }


    // マウス座標はマウスが動いた時のみ取得できる
    document.addEventListener('mousemove', (event) => {
        mouseX = event.pageX;
    });

    tick();

    //毎フレーム時に実行されるループイベントです
    function tick() {
        // マウスの位置に応じて角度を設定
        // マウスのx座標がステージの幅の何%にあるか調べてそれを360度で乗算する
        const targetRot = (mouseX / window.innerWidth) * 360;
        // イージングの公式を用いて滑らかにする
        // 値 += (目標値 - 現在の値) * 減速値
        rot += (targetRot - rot) * 0.02;

        // ラジアンに変換する
        const radian = (rot * Math.PI) / 180;
        // 角度に応じてカメラの位置を設定
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);
        // 原点方向を見つめる
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //メッシュを回転させる
        earthMesh.rotation.y += 0.005;
        container.rotation.y += 0.01;

        renderer.render(scene, camera); //レンダリング

        requestAnimationFrame(tick);
    }
}